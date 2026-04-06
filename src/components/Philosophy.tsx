import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Красота в деталях",
    description:
      "Мы верим, что настоящий уют рождается из мелочей: правильно подобранная ткань, точный крой, гармоничный цвет — всё имеет значение.",
  },
  {
    title: "Индивидуальный подход",
    description:
      "Каждый клиент уникален. Мы слушаем, советуем и создаём именно то, что впишется в ваш стиль и подчеркнёт характер вашего пространства.",
  },
  {
    title: "Качество без компромиссов",
    description:
      "Используем только проверенные материалы от надёжных поставщиков. Наши шторы и текстиль служат годами, не теряя вида.",
  },
  {
    title: "Забота о каждом доме",
    description: "От замера до установки — мы сопровождаем весь процесс. Вам остаётся только наслаждаться результатом.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наша философия</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Текстиль с
              <br />
              <HighlightedText>характером</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/51c497b7-3bb1-4092-a9fb-5ae529ca761f/files/e7c91ed0-a091-463e-aff7-295c5f6a6faa.jpg"
                alt="Шоурум салона текстиля"
                className="opacity-90 relative z-10 w-full rounded-sm"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Шторы, обои и декор — это не просто отделка. Это настроение вашего дома. Мы создаём интерьеры, в которых хочется проводить время.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}