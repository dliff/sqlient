export const sqlSelectTables = "select tablename, schemaname from pg_catalog.pg_tables where schemaname <> 'pg_catalog' order by tablename";