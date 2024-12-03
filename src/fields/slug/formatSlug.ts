import type { FieldHook } from 'payload'

const cyrillicToLatinMap: { [key: string]: string } = {
  а: "a", б: "b", в: "v", г: "g", ґ: "g", д: "d", е: "e", є: "ye", ж: "zh",
  з: "z", и: "y", і: "i", ї: "yi", й: "y", к: "k", л: "l", м: "m", н: "n",
  о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts",
  ч: "ch", ш: "sh", щ: "shch", ь: "", ю: "yu", я: "ya",
  А: "A", Б: "B", В: "V", Г: "G", Ґ: "G", Д: "D", Е: "E", Є: "Ye", Ж: "Zh",
  З: "Z", И: "Y", І: "I", Ї: "Yi", Й: "Y", К: "K", Л: "L", М: "M", Н: "N",
  О: "O", П: "P", Р: "R", С: "S", Т: "T", У: "U", Ф: "F", Х: "Kh", Ц: "Ts",
  Ч: "Ch", Ш: "Sh", Щ: "Shch", Ь: "", Ю: "Yu", Я: "Ya"
}

const transliterate = (text: string): string =>
  text.split('').map(char => cyrillicToLatinMap[char] || char).join('')

export const formatSlug = (val: string): string =>
  transliterate(val)
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove unsupported characters
    .toLowerCase()

export const formatSlugHook =
  (fallback: string): FieldHook =>
    ({ data, operation, originalDoc, value }) => {
      if (typeof value === 'string') {
        return formatSlug(value)
      }

      if (operation === 'create' || !data?.slug) {
        const fallbackData = data?.[fallback] || data?.[fallback]

        if (fallbackData && typeof fallbackData === 'string') {
          return formatSlug(fallbackData)
        }
      }

      return value
    }
