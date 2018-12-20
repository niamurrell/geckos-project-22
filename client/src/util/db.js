import idb from 'idb';

const getDatabase = async (dbName, osName) => {
	// request a db connection and create a store
	const db = await idb.open(dbName, 1, (upgradeDB) =>
		upgradeDB.createObjectStore(osName, { autoIncrement: true }),
	).then((data) => {
		return data;
	})
}

export default getDatabase;