import { FadeInSection } from "@/components/fade-in-section"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  textColor?: string
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
  textColor = "text-custom-dark-gray",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <FadeInSection>
        <h2 className={`text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
      </FadeInSection>

      {subtitle && (
        <FadeInSection delay={0.2}>
          <p
            className={`text-lg ${textColor === "text-custom-white" ? `${textColor}/80` : "text-custom-dark-gray/80"} max-w-2xl mx-auto`}
          >
            {subtitle}
          </p>
        </FadeInSection>
      )}
    </div>
  )
}

