import { FormEvent, useId, useRef, useState } from "react";
import { WEDO_CONTACT } from "@/lib/institutional";

interface ContactSectionProps { initialSubject?: string }
type FormValues = { subject: string; name: string; phone: string; city: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function ContactSection({ initialSubject = "" }: ContactSectionProps) {
  const prefix = useId();
  const [values, setValues] = useState<FormValues>({ subject: initialSubject, name: "", phone: "", city: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copyFeedback, setCopyFeedback] = useState("");
  const [copying, setCopying] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const messageVersion = useRef(0);

  const clearPreparedMessage = () => {
    messageVersion.current += 1;
    setPreparedMessage("");
    setCopyFeedback("");
    setCopying(false);
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    clearPreparedMessage();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    (Object.keys(values) as (keyof FormValues)[]).forEach((field) => {
      if (!values[field].trim()) nextErrors[field] = "Preencha este campo.";
    });
    let phoneDigits = values.phone.replace(/\D/g, "");
    if ((phoneDigits.length === 12 || phoneDigits.length === 13) && phoneDigits.startsWith("55")) phoneDigits = phoneDigits.slice(2);
    if (values.phone.trim() && !/^[1-9]\d(?:[2-5]\d{7}|9\d{8})$/.test(phoneDigits)) {
      nextErrors.phone = "Informe um telefone brasileiro com DDD. Ex.: (62) 90000-0000.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      clearPreparedMessage();
      const firstField = Object.keys(nextErrors)[0];
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }
    const message = [
      "Olá, equipe WeDo!", "", `Assunto: ${values.subject.trim()}`,
      `Nome: ${values.name.trim()}`, `Telefone: ${values.phone.trim()}`,
      `Cidade: ${values.city.trim()}`, "", values.message.trim(),
    ].join("\n");
    messageVersion.current += 1;
    setPreparedMessage(message);
    setCopyFeedback("");
    setCopying(false);
  };

  const copyMessage = async () => {
    if (!preparedMessage || copying) return;
    const version = messageVersion.current;
    setCopying(true);
    setCopyFeedback("");
    try {
      if (typeof navigator.clipboard?.writeText !== "function") throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(preparedMessage);
      if (version !== messageVersion.current) return;
      setCopyFeedback("Mensagem copiada. Escolha o canal de atendimento e cole a mensagem para enviar.");
    } catch {
      if (version !== messageVersion.current) return;
      messageRef.current?.focus();
      messageRef.current?.select();
      setCopyFeedback("Copie manualmente o texto selecionado e cole no canal de atendimento que escolher.");
    } finally {
      if (version === messageVersion.current) setCopying(false);
    }
  };

  const fieldProps = (field: keyof FormValues) => ({
    id: `${prefix}-${field}`, name: field, value: values[field], required: true,
    "aria-invalid": !!errors[field], "aria-describedby": errors[field] ? `${prefix}-${field}-error` : undefined,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => updateField(field, event.target.value),
  });

  const errorText = (field: keyof FormValues) => errors[field] && <span className="wd-field-error" id={`${prefix}-${field}-error`}>{errors[field]}</span>;

  return (
    <section id="contato" className="wd-contact" aria-labelledby={`${prefix}-title`}>
      <div className="wd-container wd-contact-grid">
        <div className="wd-contact-copy">
          <p className="wd-kicker">Fale com a WeDo</p>
          <h2 id={`${prefix}-title`}>Vamos cuidar da sua cozinha.</h2>
          <p>Conte o que sua operação precisa. Nossa equipe orienta o atendimento e os próximos passos.</p>
          <a className="wd-button wd-contact-channels" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer">Escolher canal de atendimento <span aria-hidden="true">↗</span></a>
          <p className="wd-contact-region">Goiás e Distrito Federal</p>
        </div>
        <form className="wd-contact-form" onSubmit={handleSubmit} noValidate aria-label="Preparar solicitação de atendimento">
          <p className="wd-form-intro">Prepare uma mensagem para enviar pelo canal de sua preferência. Todos os campos são obrigatórios.</p>
          <div className="wd-field wd-field-wide">
            <label htmlFor={`${prefix}-subject`}>Como podemos ajudar?</label>
            <select {...fieldProps("subject")}>
              <option value="">Selecione o assunto</option>
              {Array.from(new Set(["Assistência técnica", "Contrato de manutenção", "Peças e insumos", "Higienização de coifas", "Outro assunto", initialSubject].filter(Boolean))).map((subject) => <option value={subject} key={subject}>{subject}</option>)}
            </select>{errorText("subject")}
          </div>
          <div className="wd-field"><label htmlFor={`${prefix}-name`}>Nome</label><input {...fieldProps("name")} autoComplete="name" maxLength={100} />{errorText("name")}</div>
          <div className="wd-field"><label htmlFor={`${prefix}-phone`}>Telefone com DDD</label><input {...fieldProps("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="(62) 90000-0000" maxLength={24} />{errorText("phone")}</div>
          <div className="wd-field wd-field-wide"><label htmlFor={`${prefix}-city`}>Cidade e estado</label><input {...fieldProps("city")} autoComplete="address-level2" placeholder="Ex.: Goiânia, GO" maxLength={100} />{errorText("city")}</div>
          <div className="wd-field wd-field-wide"><label htmlFor={`${prefix}-message`}>Conte o que você precisa</label><textarea {...fieldProps("message")} rows={3} maxLength={2000} placeholder="Informe o equipamento, a marca e o que está acontecendo." />{errorText("message")}</div>
          <div className="wd-field-wide wd-form-actions">
            <button className="wd-button" type="submit">Preparar atendimento <span aria-hidden="true">→</span></button>
            <p>Você poderá revisar a mensagem antes de escolher o canal de atendimento.</p>
          </div>
          <div className="wd-field-wide wd-form-result">
            {preparedMessage && <>
              <p>A mensagem ainda não foi enviada. Copie o texto e escolha o canal de atendimento para enviar.</p>
              <label htmlFor={`${prefix}-prepared-message`}>Mensagem preparada</label>
              <textarea className="wd-prepared-message" id={`${prefix}-prepared-message`} ref={messageRef} readOnly value={preparedMessage} rows={9} />
              <div className="wd-message-actions">
                <button className="wd-button wd-button-outline" type="button" onClick={copyMessage} disabled={copying}>{copying ? "Copiando…" : "Copiar mensagem"}</button>
                <a className="wd-text-link" href={WEDO_CONTACT.channelsHref} target="_blank" rel="noopener noreferrer">Escolher canal de atendimento <span aria-hidden="true">↗</span></a>
              </div>
            </>}
            <p className="wd-copy-status" role="status" aria-live="polite">{copyFeedback}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
