import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => {
    const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
    const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
    return {
      ...student,
      firstName,
      lastName,
    };
  });

  const JSObject = filtered.toJS();

  console.log(JSObject);
}
