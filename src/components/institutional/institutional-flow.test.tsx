import { PropsWithChildren } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { Link, MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import ContactSection from "./ContactSection";
import InstitutionalHeader from "./InstitutionalHeader";

// Keep the legacy shell real while isolating its CMS configuration from the network.
vi.mock("@/hooks/useSiteSettings", () => ({
  useCTASettings: () => ({
    ctaUrl: "https://contatoswedo.lovable.app",
    ctaText: "Acessar Atendimento",
    ctaTextSecondary: "Canais Oficiais WeDo",
  }),
}));

const clipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, "clipboard");
function setClipboard(writeText?: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: writeText ? { writeText } : undefined });
}

beforeEach(() => {
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  setClipboard();
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  if (clipboardDescriptor) Object.defineProperty(navigator, "clipboard", clipboardDescriptor);
  else Reflect.deleteProperty(navigator, "clipboard");
});

function Router({ children }: PropsWithChildren) {
  return <HelmetProvider><MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{children}</MemoryRouter></HelmetProvider>;
}

function completeRequest() {
  fireEvent.change(screen.getByLabelText("Como podemos ajudar?"), { target: { value: "Assistência técnica" } });
  fireEvent.change(screen.getByLabelText("Nome"), { target: { value: " Ana & João " } });
  fireEvent.change(screen.getByLabelText("Telefone com DDD"), { target: { value: "+55 (62) 99888-1234" } });
  fireEvent.change(screen.getByLabelText("Cidade e estado"), { target: { value: " Goiânia, GO " } });
  fireEvent.change(screen.getByLabelText("Conte o que você precisa"), { target: { value: " Forno não aquece. Peça #42 & diagnóstico? " } });
}

function prepareRequest() {
  fireEvent.click(screen.getByRole("button", { name: "Preparar atendimento" }));
}

describe("Navegação institucional", () => {
  it("expõe o estado do menu e devolve o foco ao fechá-lo com Escape", () => {
    render(<InstitutionalHeader />, { wrapper: Router });
    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    const navigation = screen.getByRole("navigation", { name: "Navegação principal" });
    vi.mocked(window.scrollTo).mockClear();

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", navigation.id);
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    within(navigation).getByRole("link", { name: "A WeDo" }).focus();
    fireEvent.keyDown(document, { key: "Escape" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it("fecha ao navegar e indica a página atual após a troca de rota", () => {
    render(<MemoryRouter initialEntries={["/assistencia-multimarcas"]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><InstitutionalHeader /></MemoryRouter>);
    const navigation = screen.getByRole("navigation", { name: "Navegação principal" });
    const assistance = within(navigation).getByRole("link", { name: "Assistência técnica" });
    const company = within(navigation).getByRole("link", { name: "A WeDo" });
    expect(assistance).toHaveAttribute("aria-current", "page");
    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    vi.mocked(window.scrollTo).mockClear();
    fireEvent.click(toggle);
    expect(window.scrollTo).not.toHaveBeenCalled();
    fireEvent.click(company);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(company).toHaveAttribute("aria-current", "page");
    expect(assistance).not.toHaveAttribute("aria-current");
    expect(window.scrollTo).toHaveBeenCalledExactlyOnceWith({ top: 0, left: 0, behavior: "auto" });
  });

  it("respeita o destino com hash ao trocar de página sem interferir nos atalhos da mesma página", () => {
    render(<><InstitutionalHeader /><Link to="/sobre#contato">Página com contato</Link><Link to="/sobre#conteudo">Atalho na mesma página</Link><h2 id="contato">Destino de contato</h2><h2 id="conteudo">Destino de conteúdo</h2></>, { wrapper: Router });
    const contactScroll = vi.fn();
    const contentScroll = vi.fn();
    screen.getByRole("heading", { name: "Destino de contato" }).scrollIntoView = contactScroll;
    screen.getByRole("heading", { name: "Destino de conteúdo" }).scrollIntoView = contentScroll;
    vi.mocked(window.scrollTo).mockClear();

    fireEvent.click(screen.getByRole("link", { name: "Página com contato" }));
    expect(contactScroll).toHaveBeenCalledExactlyOnceWith({ block: "start", behavior: "auto" });
    expect(window.scrollTo).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("link", { name: "Atalho na mesma página" }));
    expect(contentScroll).not.toHaveBeenCalled();
    expect(contactScroll).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});

describe("Solicitação pelos canais de atendimento", () => {
  it("impede solicitação com espaços ou telefone inválido e mantém os dados para correção", () => {
    render(<ContactSection />);
    completeRequest();
    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "   " } });
    fireEvent.change(screen.getByLabelText("Telefone com DDD"), { target: { value: "12345" } });
    prepareRequest();

    expect(screen.getByLabelText("Nome")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Nome")).toHaveFocus();
    expect(screen.getByLabelText("Telefone com DDD")).toHaveAttribute("aria-invalid", "true");
    expect(screen.queryByLabelText("Mensagem preparada")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Conte o que você precisa")).toHaveValue(" Forno não aquece. Peça #42 & diagnóstico? ");

    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Ana" } });
    prepareRequest();
    expect(screen.getByLabelText("Telefone com DDD")).toHaveFocus();
    expect(screen.queryByLabelText("Mensagem preparada")).not.toBeInTheDocument();
  });

  it("aceita telefone com +55 e prepara a mensagem sem enviar nem expor os dados no link do hub", () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard(writeText);
    const { container } = render(<ContactSection />);
    completeRequest();
    prepareRequest();

    const expectedMessage = "Olá, equipe WeDo!\n\nAssunto: Assistência técnica\nNome: Ana & João\nTelefone: +55 (62) 99888-1234\nCidade: Goiânia, GO\n\nForno não aquece. Peça #42 & diagnóstico?";
    expect(screen.getByLabelText("Mensagem preparada")).toHaveValue(expectedMessage);
    expect(screen.getByLabelText("Mensagem preparada")).toHaveAttribute("readonly");
    expect(screen.getByText(/A mensagem ainda não foi enviada/)).toBeInTheDocument();
    expect(writeText).not.toHaveBeenCalled();
    for (const link of screen.getAllByRole("link", { name: "Escolher canal de atendimento" })) {
      expect(link).toHaveAttribute("href", "https://contatoswedo.lovable.app");
      expect(new URL(link.getAttribute("href")!).search).toBe("");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(container.querySelector('a[href^="tel:"], a[href*="wa.me"]')).not.toBeInTheDocument();
    expect(screen.getByLabelText("Telefone com DDD")).toHaveValue("+55 (62) 99888-1234");
  });

  it("copia a mensagem por clique e orienta a escolha do canal sem enviá-la", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard(writeText);
    render(<ContactSection />);
    completeRequest();
    prepareRequest();
    const message = (screen.getByLabelText("Mensagem preparada") as HTMLTextAreaElement).value;
    fireEvent.click(screen.getByRole("button", { name: "Copiar mensagem" }));

    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Mensagem copiada. Escolha o canal de atendimento e cole a mensagem para enviar."));
    expect(writeText).toHaveBeenCalledExactlyOnceWith(message);
    expect(screen.getByRole("button", { name: "Copiar mensagem" })).toBeEnabled();

    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Outro nome" } });
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
    expect(screen.queryByLabelText("Mensagem preparada")).not.toBeInTheDocument();
  });

  it.each(["indisponível", "negada"])("permite copiar manualmente quando a área de transferência está %s", async (failure) => {
    if (failure === "negada") setClipboard(vi.fn().mockRejectedValue(new Error("Permission denied")));
    render(<ContactSection />);
    completeRequest();
    prepareRequest();
    fireEvent.click(screen.getByRole("button", { name: "Copiar mensagem" }));

    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Copie manualmente o texto selecionado"));
    const message = screen.getByLabelText("Mensagem preparada") as HTMLTextAreaElement;
    expect(message).toHaveFocus();
    expect(message.selectionStart).toBe(0);
    expect(message.selectionEnd).toBe(message.value.length);
    expect(screen.getByRole("button", { name: "Copiar mensagem" })).toBeEnabled();
  });

  it.each(["sucesso", "falha"])("ignora o resultado tardio de uma cópia (%s) após editar e preparar outra mensagem", async (outcome) => {
    let finishCopy = () => {};
    const pendingCopy = new Promise<void>((resolve, reject) => {
      finishCopy = () => outcome === "sucesso" ? resolve() : reject(new Error("Permission denied"));
    });
    setClipboard(vi.fn(() => pendingCopy));
    render(<ContactSection />);
    completeRequest();
    prepareRequest();
    fireEvent.click(screen.getByRole("button", { name: "Copiar mensagem" }));
    expect(screen.getByRole("button", { name: "Copiando…" })).toBeDisabled();

    fireEvent.change(screen.getByLabelText("Conte o que você precisa"), { target: { value: "Agora é a lavadora." } });
    expect(screen.queryByLabelText("Mensagem preparada")).not.toBeInTheDocument();
    prepareRequest();
    screen.getByLabelText("Nome").focus();
    await act(async () => { finishCopy(); });

    expect((screen.getByLabelText("Mensagem preparada") as HTMLTextAreaElement).value).toContain("Agora é a lavadora.");
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
    expect(screen.getByLabelText("Nome")).toHaveFocus();
    expect(screen.getByRole("button", { name: "Copiar mensagem" })).toBeEnabled();
  });

  it.each([
    ["Telefone com DDD", "(62) 99777-4321"],
    ["Conte o que você precisa", "Corrigindo: é a lavadora, e não o forno."],
  ])("exige preparar uma nova mensagem quando %s muda", (label, value) => {
    render(<ContactSection />);
    completeRequest();
    prepareRequest();
    const previousMessage = (screen.getByLabelText("Mensagem preparada") as HTMLTextAreaElement).value;
    fireEvent.change(screen.getByLabelText(label), { target: { value } });

    expect(screen.queryByLabelText("Mensagem preparada")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Nome")).toHaveValue(" Ana & João ");
    prepareRequest();
    const nextMessage = (screen.getByLabelText("Mensagem preparada") as HTMLTextAreaElement).value;
    expect(nextMessage).not.toBe(previousMessage);
    expect(nextMessage).toContain(value);
  });
});

describe("Isolamento do novo layout", () => {
  it("preserva a navegação e o atendimento flutuante das páginas que usam o layout padrão", () => {
    const { container } = render(<Layout><h1>Página existente</h1></Layout>, { wrapper: Router });
    expect(screen.getByRole("heading", { name: "Página existente" })).toBeInTheDocument();
    expect(container.querySelector(".wd-institutional")).not.toBeInTheDocument();
    expect(container.querySelector("a.btn-float")).toHaveAttribute("href", "https://contatoswedo.lovable.app");
  });

  it("leva cabeçalho, rodapé e solicitação ao hub sem oferecer ligação ou WhatsApp pessoal", () => {
    const { container } = render(<Layout variant="institutional"><h1>Nova página institucional</h1><ContactSection /></Layout>, { wrapper: Router });
    expect(screen.getByRole("main")).toHaveAttribute("id", "wd-main");
    expect(screen.getByRole("link", { name: "Ir para o conteúdo" })).toHaveAttribute("href", "#wd-main");
    expect(screen.getByRole("heading", { name: "Nova página institucional" })).toBeInTheDocument();
    expect(container.querySelector(".btn-float")).not.toBeInTheDocument();
    const assertChannels = () => {
      expect(container.querySelector('a[href^="tel:"], a[href*="wa.me"]')).not.toBeInTheDocument();
      expect(container.textContent).not.toContain("99446-6458");
      const links = container.querySelectorAll('a[href*="contatoswedo.lovable.app"]');
      expect(links.length).toBeGreaterThanOrEqual(3);
      links.forEach((link) => expect(link).toHaveAttribute("href", "https://contatoswedo.lovable.app"));
    };
    assertChannels();
    completeRequest();
    prepareRequest();
    assertChannels();
    expect(screen.getByLabelText("Mensagem preparada")).toBeInTheDocument();
  });
});
