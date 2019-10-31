export const formatDuration = minutes => {
  const hours = Math.floor(minutes / 60)
  return hours + 'h ' + (minutes % hours) + 'm'
}
