function StatusMessage({ loading, error }) {
  if (loading) return <p className="status">Loading...</p>
  if (error)   return <p className="error">Error: {error}</p>
  return null
}

export default StatusMessage