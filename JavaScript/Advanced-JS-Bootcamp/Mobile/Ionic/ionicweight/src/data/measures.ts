
export interface Measure {
  weight: string
  date: string
  id: number
}

const measures: Measure[] = [
  {
    weight: '70',
    date: '10 aug',
    id: 0,
  },
  {
    weight: '71',
    date: '16 aug',
    id: 1,
  },
]

export const getMeasures = () => measures;

export const getMeasure = (id: number) => measures.find(m => m.id === id);