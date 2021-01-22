export const sqlSelectTables = "select tablename, schemaname from pg_catalog.pg_tables where schemaname <> 'pg_catalog' order by tablename";

export const sqlSelectTableSchema = (tableName) => "select column_name, data_type, is_nullable from information_schema.columns where table_schema <> 'pg_catalog' and table_name = '" + tableName + "'";