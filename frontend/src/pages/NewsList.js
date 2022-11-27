// import LayoutDashboard from '../components/LayoutDashboard';

const newsList = () => {
  const userData = [
    {
      id: '1',
      name: '	Cy Ganderton',
      location: 'UK',
    },
    {
      id: '2',
      name: 'Hart Hagerty',
      location: 'Indonesia',
    },
    {
      id: '3',
      name: 'Brice Swyre',
      location: 'Indonesia',
    },
    {
      id: '4',
      name: 'Marjy Ferencz',
      location: 'Indonesia',
    },
    {
      id: '5',
      name: 'Irma Vasilik',
      location: 'Indonesia',
    },
  ];

  return (
    <div className="flex flex-col w-full px-4 mt-14">
      <div className="mb-4">
        <span className="font-bold text-2xl">HOME</span>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Nama</th>
              <th>Lokasi</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default newsList;
