import DuckDB from 'duckdb'

export const db = new DuckDB.Database(':memory:')
db.connect()

// テスト: duckdb から message を返す
export const selectMessage = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT 'Hello from DuckDB!' as message", (err, res) => {
      if (err) reject(err)
      resolve(res[0].message)
    })
  })
}
