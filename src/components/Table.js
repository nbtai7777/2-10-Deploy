import styles from './Table.module.css';
function Table({ list }) {
  return (
    <div>
      {/* <p>{list[0].name}</p> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>            
            <th>Year</th>
            <th>Enrolment</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => (
              <tr key={item.id}>
                <td>{item._id}</td>
                <td>{item.year}</td>
                <td>{item.enrolment}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
