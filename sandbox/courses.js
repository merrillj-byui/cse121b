// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent : function(sectionNumber){
        const getIndex = (section) => section.sectionNum == sectionNumber;
        const index = this.sections.findIndex(getIndex);
        if (index >= 0){
            this.sections[index].enrolled += 1;
            updateSectionInfo(aCourse.sections);
        }
    },
    dropStudent : function(sectionNumber){
        const getIndex = (section) => section.sectionNum == sectionNumber;
        const index = this.sections.findIndex(getIndex);
        if (index >= 0 && this.sections[index].enrolled > 0){
            this.sections[index].enrolled -= 1;
            updateSectionInfo(aCourse.sections);
        }
    }
  };

  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
  
  function updateCourseInfo(course) {
    const nameElement = document.querySelector("#courseName");
    const codeElement = document.querySelector("#courseCode");

    nameElement.textContent = aCourse.name;
    codeElement.textContent = aCourse.code;
  }

  function  updateSectionInfo(sections){
    const tableBodyElement = document.querySelector("#sections");
    const htmlStrings = sections.map( (section) => `
        <tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr> `);
    htmlText = htmlStrings.join(" ");
    tableBodyElement.innerHTML = htmlText;
  }

  updateCourseInfo(aCourse);
  updateSectionInfo(aCourse.sections);
  