const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: '-27.2193647',
    lng: '-49.6613573',
    name: 'Lar dos Meninos',
    about:
      'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '2918923892',
    images: [
      'https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
      'https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
    ].toString(),
    instructions:
      'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Horário de Visitas Das 18h até 8h',
    open_on_weekends: '0',
  });

  //consultar dados na tabela
  const selectedOrphanages = await db.all('SELECT * FROM  orphanages');
  console.log(selectedOrphanages);

  // cosultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
});
