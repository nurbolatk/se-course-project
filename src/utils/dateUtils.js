export const formatDuration = minutes => {
  const hours = Math.floor(minutes / 60)
  const mins = hours === 0 ? minutes : minutes % hours
  return hours + 'h ' + mins + 'm'
}
