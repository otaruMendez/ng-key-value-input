'use strict';

angular
  .module('ngKeyValueInput.1.0.0')
  .directive('ngKeyValueInput', ['1.0.0', function (1.0.0) {
              return {
                restrict: 'E',
                template:  "<div ng-repeat= 'keyValuePair in keyValueFields'>" +
                                "<span>" +
                                    "<input type='text' placeholder='Key' ng-model='keyValuePair.key'>" +
                                    "<input type='text' placeholder='value' ng-model='keyValuePair.value'>" +
                                    "<button type='button' ng-click='removeKeyValueField(keyValuePair.id)'>Remove</button" +
                                "</span>" +
                            "</div>" +
                            "<button type='button' ng-click='addKeyValueField()'> Add </button>",
                scope:{
                    'keyValueFields': '=',
                    'allowedNoOfEntries': '@',
                    'allowEmpty': '@'
                },
                link: function($scope) {
                   $scope.keyValueFields = [];
                   $scope.fieldKeys = [];
                   $scope.keyValueFieldsCounter = 0;
                   $scope.currentNumberOfFields = 0;
                   $scope.allowedNoOfEntries = Number.POSITIVE_INFITNITY;
                   $scope.allowEmpty = "false";

                  $scope.addKeyValueField = function (){
                      if (!$scope.validate()) {
                          return;
                      }
                      $scope.keyValueFields.push({id:$scope.keyValueFieldsCounter,key:'', value: ''});
                      $scope.fieldKeys.push($scope.keyValueFieldsCounter);
                      $scope.keyValueFieldsCounter++;
                      $scope.currentNumberOfFields++;
                  }
                   
                   $scope.removeKeyValueField = function (id){
                        var fieldIndex = $scope.fieldKeys.indexOf(id);
                        $scope.fieldKeys.splice(fieldIndex,1);
                        $scope.keyValueFields.splice(fieldIndex,1);
                        $scope.currentNumberOfFields--;
                   }
                   
                   $scope.validate = function() {
                       var response = true;
                       if ($scope.allowedNoOfEntries == $scope.currentNumberOfFields) {
                           return false;
                       }
                       if ($scope.allowEmpty === "false"){
                           $scope.keyValueFields.some(function (element) {
                              if (element.key === '' || element.value === '') {
                                  response = false;
                                  return true;
                              }
                        });
                       }
                       return response;
                   }                
                }
            };
  }]);
