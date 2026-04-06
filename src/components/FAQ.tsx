import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как сделать заказ на шторы?",
    answer:
      "Всё просто: оставьте заявку или позвоните нам, мы согласуем время, замерщик приедет к вам, подберём ткань и фурнитуру. После пошива — доставка и установка. Вы ничего не делаете сами.",
  },
  {
    question: "Сколько времени занимает пошив штор?",
    answer:
      "Стандартные шторы мы шьём за 7–14 дней. Сложные модели с декором, ламбрекенами или особыми тканями — до 21 дня. Сроки уточняем на этапе замера.",
  },
  {
    question: "Вы занимаетесь установкой карнизов и гардин?",
    answer:
      "Да, мы предоставляем услугу полного монтажа: крепим карнизы, вешаем шторы, регулируем складки. Наш мастер приедет в удобное для вас время.",
  },
  {
    question: "Можно ли заказать обои и фрески под размер комнаты?",
    answer:
      "Конечно. Мы работаем с индивидуальными фресками и фотообоями — печатаем точно под ваши стены. Также нарезаем рулонные обои по вашим меркам.",
  },
  {
    question: "Какие ткани вы используете для штор?",
    answer:
      "Мы работаем с широким ассортиментом: лён, бархат, жаккард, вуаль, блэкаут, органза. Ткани от российских и европейских производителей. Всегда можем показать образцы перед заказом.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Напишите нам или позвоните — согласуем бесплатный выезд замерщика. На месте покажем каталоги, подберём решение под ваш интерьер и озвучим стоимость.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}