export const container = (child_string) => {
  return (/*html*/`
    
      ${child_string.map((item) => item).join('\n')}
    
  `)
}
