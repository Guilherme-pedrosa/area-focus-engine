const brands = [
  {
    name: "Rational",
    logo: "https://sspark.genspark.ai/cfimages?u1=a3LnZKxl%2BC3rQuvaBYjYxlbq3pKLxKWXgdKiBXaVyTHE6IA2ID7oQVqhFr%2FB4RprOd6pyTXyT0duRfrHfRbzZDr4beFU5Uo454qt5BjCew2xmZyTU4q4gw4rAj8IJf3jIpBY%2BBYjagSOqtLr6IpyYyweEKRqXLVN&u2=bE0M8Wi1kQhgMa7E&width=2560",
    featured: true,
  },
  {
    name: "Hobart",
    logo: "https://sspark.genspark.ai/cfimages?u1=uPTuxsWf0DNKuQzIMbS1ty%2BGH6%2FM%2B3T2DHuaySJPi7JKvDTTcGUZRcLl%2BGGoYBITvgu1Hwrd4VsmF7FGwgF1cvqnkv8G90ygI%2Ba2txDyR8yywaHIEOWaxrPAIM%2BPILZFLDU%3D&u2=Dj5bRNmdAUt6G%2FjP&width=2560",
  },
  {
    name: "Vulcan",
    logo: "https://sspark.genspark.ai/cfimages?u1=pl%2B2G5V4zaoahgoGuFn2hiL3JW24Rgbq07A1Ar4PsWLGZ%2FfF54xmHHotUFfp7b521x1jfdXjCFjuZf0GFts3ZzYzY63VFmOhIwDvwd%2BLd8ogyjgupxQoGfEkx%2BnrXc3w&u2=OraimpxkUPOt7hb1&width=2560",
  },
  {
    name: "Robot Coupe",
    logo: "https://sspark.genspark.ai/cfimages?u1=OpgadeR9imimUdYZKGdVaqHWZlf2WINEAFUNvMD%2B3q1dB1SPlHYqVrhKmd6UyTLdG%2BEDe1wGpbMCK6iuMgkfu3uE1Nf8mkbEUKJ4CvckXvb%2B5HMyV9MoWsP5aO%2BNZm6D2Q%3D%3D&u2=VjjmiWlwDgs0DKKV&width=2560",
  },
  {
    name: "Irinox",
    logo: "https://sspark.genspark.ai/cfimages?u1=JY4rFQbFR0yCmUvgNZxk1x3NVt8MT%2B1rpOjc6mILVQKjRTyzdBXDkGPDbRt7PzSfyFAP%2BwFLq7q75dHfDUOOxS7iGAo%3D&u2=t%2BMbB67BWXxehJjV&width=2560",
  },
  {
    name: "Prática",
    logo: "https://sspark.genspark.ai/cfimages?u1=KJHW7CLGh9M94U9rKJ22xIV831SofvK8noZT5ku6D6yV5ltKgaKw%2B3q%2Fusqe8qttnceN2PQrhkUMVNIBRb0oyjzKpQ5lWkJCMJeSY7ef%2BL4c&u2=J2QMxgSUvyYbTbT%2B&width=2560",
  },
  {
    name: "Tramontina",
    logo: "https://sspark.genspark.ai/cfimages?u1=uf%2BNM8Xg9Llmq75WviORbEHY7KjTgL4hzKLgn0bApwx98YxJuqg43Kg03T033UErRWm0xGXAQML3skf%2Fmfibyrc527HrMUPkFygJWoxxxo6R5%2FPCKz8C%2BwDTYA%3D%3D&u2=j2bt0UOoZXChWzk1&width=2560",
  },
  {
    name: "Macon",
    logo: "https://sspark.genspark.ai/cfimages?u1=YCmIrx52Nny9r4PgezJARgK5pmSdAXGSRvmu9ioCArljD5epDgQdcEtGwv90SjypoIZtFeMv%2FLb5KsP3cIV6pWpN3yAXU1ooqGCUCH%2BzkbXgBgob7YG8qvgCABSGbuNck8aidgw6&u2=Snf86BqBqKUBkFzf&width=2560",
  },
  {
    name: "Hoshizaki",
    logo: "https://sspark.genspark.ai/cfimages?u1=257YOF3VHvHjtBou4IcU6JHh%2FxlgISvKAycZjni37s4dSIHsOgmvarvRAkRxd4uFjJVsGTKW8XYZYdEQP8ek9mgKwbcuwl1%2B4q7YUAaEpMfZZk%2Ffg8EmyJBBNGtnXrhiPw%3D%3D&u2=0exzdU3RjEJCOVme&width=2560",
  },
  {
    name: "Cozil",
    logo: "https://sspark.genspark.ai/cfimages?u1=uTNt5s7VfkwV8SqD2Anr%2BNaozZu5TCE33swT84AZrE2VNVo0ZCmjDrhzkatDSaW5GglRuM%2BV4RO2%2FDlXILTGhOVmSpsC&u2=ITHjp2NErAkX4Nde&width=2560",
  },
  {
    name: "Fornoflex",
    logo: "https://sspark.genspark.ai/cfimages?u1=Jl4LehPMshhGB77AmjGqfqb52vO7LLErdTIGhO5eCGx55sS1YTIFGdyX39HuGHyPr1utdz7LlegCutbr2tLVNK0jpp2u5Hj3Mg4N%2FQM0kCv8FMJ09Qjd4d7DvB9VZ2CfEkBWFkrrCGhBNXjFLTkdhKF5naLCe29Tdb%2F%2FDZz%2Fig%3D%3D&u2=Mmm%2BPF%2F6kGDG6gPm&width=2560",
  },
  {
    name: "Metalfrio",
    logo: "https://sspark.genspark.ai/cfimages?u1=j7M6AedsylRl1ePxdcqx883sTwmqfyC71qfNKD%2FeH7nRSFaLRJUhsOGV40xCEADkjvXHXRxOzV5aEpU7DX5ooWhszvwGRlZfy5EhCnCGQeEgnJ6N2V7sjg%3D%3D&u2=hniTv06DTFmNK0%2B8&width=2560",
  },
];

export default function BrandsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wedo">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="title-section">Especialistas nas Principais Marcas do Mercado</h2>
          <p className="subtitle-section mx-auto">
            Parceiros autorizados e especialistas técnicos nas marcas líderes de equipamentos para cozinhas profissionais.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`bg-card rounded-xl p-6 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                brand.featured ? "col-span-2 sm:col-span-1 ring-2 ring-primary/20" : ""
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} - Parceiro Autorizado`}
                className={`max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ${
                  brand.featured ? "max-h-16" : ""
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
