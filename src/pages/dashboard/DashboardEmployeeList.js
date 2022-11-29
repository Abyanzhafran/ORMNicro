function DashboardEmployeeList() {
  const employeeData = [
    {
      id: '1',
      title: 'ORM news lorem title',
      createdDate: '28/2/2022',
    },
    {
      id: '2',
      title: 'ORM news lorem title',
      createdDate: '28/2/2022',
    },
    {
      id: '3',
      title: 'ORM news lorem title',
      createdDate: '28/2/2022',
    },
    {
      id: '4',
      title: 'ORM news lorem title',
      createdDate: '28/2/2022',
    },
    {
      id: '5',
      title: 'ORM news lorem title',
      createdDate: '28/2/2022',
    },
  ];

  return (
    <div className="flex flex-col w-full px-4 mt-14">
      <div className="mb-4">
        <span className="font-bold text-2xl">Daftar Karyawan</span>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Judul berita</th>
              <th>Tannggal buat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((user) => (
              <tr>
                <th>{user.id}</th>
                <td>{user.title}</td>
                <td>{user.createdDate}</td>
                <td className="flex gap-1">
                  <label
                    className="btn btn-xs btn-success modal-button"
                    for="my-modal-1"
                  >
                    Edit
                  </label>
                  <label
                    className="btn btn-xs btn-error"
                    for="my-modal-2"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* add modal */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-4 mt-8">
            <span className="font-bold text-2xl">Input Data Tim</span>
            <input
              placeholder="News title"
              className="input input-bordered"
              type="text"
            />
            <input
              placeholder="Content"
              className="input input-bordered"
              type="text"
            />
          </div>
          <div className="modal-action">
            <label
              for="my-modal-1"
              className="btn btn-primary"
            >
              Submit
            </label>
            <label for="my-modal-1" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <span>Sure want to Delete ??</span>
          <div className="modal-action">
            <label
              for="my-modal-2"
              className="btn btn-primary"
            >
              Delete
            </label>
            <label for="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmployeeList;
