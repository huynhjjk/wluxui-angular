'use strict';

/* Controllers */
function AllStudiesCtrl($scope, $http, $route) {
  $http.get('/getStudies').
    success(function(data, status, headers, config) {
      $scope.studies = data.studies;
    });

  // Display study details information on study details panel
  $scope.getStudyDetails = function(studyId) {
    for (var i = 0; i < $scope.studies.length; i++) {
      if ($scope.studies[i].studyId === studyId) {
        $scope.studyDetails = $scope.studies[i];
      }
    }
  }

  // Highlight selected study for indication
  $scope.setSelected = function() {
     if ($scope.lastSelected) {
       $scope.lastSelected.selected = '';
     }
     this.selected = 'active';
     $scope.lastSelected = this;
  }

}