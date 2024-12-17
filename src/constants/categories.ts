export const CATEGORIES = {
  PANEER: 'Paneer Dishes / पनीर व्यंजन',
  VEGETARIAN: 'Vegetarian Dishes / शाकाहारी व्यंजन',
  NON_VEGETARIAN: 'Non-Vegetarian Dishes / मांसाहारी व्यंजन'
} as const;

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];