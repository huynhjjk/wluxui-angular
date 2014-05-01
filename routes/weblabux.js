/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
  var studies = [
    {
      studyId: 1,
      name: "Test study 1",
      description: "This is a test study used while developing new code.",
      dateCreated: new Date(),
      status: "scheduled",
      studyPeriods: [
        {
          name: "Period 1",
          startDate: new Date(),
          endDate: new Date(),
          active: 25,
          completed: 30,
          aborted: 10
        },
        {
          name: "Period 2",
          startDate: new Date(),
          endDate: new Date(),
          active: 10,
          completed: 20,
          aborted: 4
        },
        {
          name: "Period 3",
          startDate: new Date(),
          endDate: new Date(),
          active: 7,
          completed: 12,
          aborted: 18
        }        
      ]      
    },
    {
      studyId: 2,
      name: "Elizabeth",
      description: "This is a test of the emergency broadcast system.",
      dateCreated: new Date(),
      status: "archived",
      studyPeriods: [
        {
          name: "Period 1",
          startDate: new Date(),
          endDate: new Date(),
          active: 15,
          completed: 17,
          aborted: 20
        },
        {
          name: "Period 2",
          startDate: new Date(),
          endDate: new Date(),
          active: 30,
          completed: 10,
          aborted: 40
        },
        {
          name: "Period 3",
          startDate: new Date(),
          endDate: new Date(),
          active: 2,
          completed: 6,
          aborted: 19
        }        
      ]      
    },
    {
      studyId: 3,
      name: "Another Test",
      description: "This is a test study used during development",
      dateCreated: new Date(),
      status: "completed",
      studyPeriods: [
        {
          name: "Period 1",
          startDate: new Date(),
          endDate: new Date(),
          active: 12,
          completed: 32,
          aborted: 23
        },
        {
          name: "Period 2",
          startDate: new Date(),
          endDate: new Date(),
          active: 4,
          completed: 6,
          aborted: 3
        },
        {
          name: "Period 3",
          startDate: new Date(),
          endDate: new Date(),
          active: 2,
          completed: 4,
          aborted: 7
        }        
      ]      
    },
    {
      studyId: 4,
      name: "AngularJS App",
      description: "This is using Express, AngularJS, and NodeJS",
      dateCreated: new Date(),
      status: "draft",
      studyPeriods: [
        {
          name: "Period 1",
          startDate: new Date(),
          endDate: new Date(),
          active: 1,
          completed: 1,
          aborted: 1
        },
        {
          name: "Period 2",
          startDate: new Date(),
          endDate: new Date(),
          active: 2,
          completed: 2,
          aborted: 2
        },
        {
          name: "Period 3",
          startDate: new Date(),
          endDate: new Date(),
          active: 3,
          completed: 3,
          aborted: 3
        }        
      ]      
    }
  ]

// GET

exports.getStudies = function (req, res) {
  res.json({
  studies: studies
  }, 200);
  console.log('Get studies');
  console.log(JSON.stringify(studies));
};

// POST


// PUT


// DELETE
