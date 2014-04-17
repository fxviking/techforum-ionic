/**
 * DetailConference Controller
 */
angular.module('app')
    .controller('DetailConferenceController', ['$scope','$stateParams','ConferencesService','MessagesService','$ionicNavBarDelegate','$ionicLoading','$resource','$state','AgendaService','$ionicPopup', function($scope,$stateParams,ConferencesService,MessagesService,$ionicNavBarDelegate,$ionicLoading,$resource,$state,AgendaService,$ionicPopup)
    {
        console.log('--- DetailConferenceController ---');

        var idConference = $stateParams.conferenceId;
        var conferences = [];
        $scope.comments = [];
        $scope.conference = [];
        $scope.loadingComment = "loading...";
        $scope.showHideComment = 'show';
        $scope.newComment = {
            name : null,
            msg : null
        }

        /** Display conference description **/
        $scope.displayDescription = function(){
            if($scope.showHideComment == 'show'){
                $scope.showHideComment = 'hide';
            }else
                $scope.showHideComment = 'show';
        }

        /** Retrieve conference by id with $stateParam and display detail conference **/
        $scope.getConference = function(){
            ConferencesService.getLocalConferences().query(function(data){
                conferences = data;
                angular.forEach(data,function(conference , key) {
                    if (conference._id == idConference) {
                        getComments();
                        return $scope.conference = conference;
                    }
                });
            },function(reason){
                console.log(reason);
                alert('Enable to retrieve a conference with id '+idConference);
            });
        }

        /** Post a comment on server for conference with id : idConference **/
        $scope.postComment = function(idConference){

            var commentR = MessagesService.getOnlineMsgComment();
            var comment = new commentR();
            comment.name = $scope.newComment.name,
            comment.msg = $scope.newComment.msg,
            comment.type = "comment",
            comment.date = new Date(),
            comment.idConference = idConference

            comment.$save(
                function(data, getResponseHeadersSuccess){
                    $ionicPopup.alert({
                        title: 'Send comment',
                        content: 'Your comment has been sent correctly.'
                    }).then(function(res) {
                        getComments();
                    });;

                },
                function(data,getResponseHeadersError){
                    $ionicPopup.alert({
                        title: 'Send comment',
                        content: 'Impossible to send your comment'
                    });
                }
            );

            $scope.newComment.name = null;
            $scope.newComment.msg = null;

        }

        /** retrieve all comment for conference **/
        var getComments = function(){
            MessagesService.getOnlineMsgCommentByIdConference(idConference).query(
                function(data){
                    console.log(data);
                    $scope.comments = data;
                    $scope.loadingComment = "";
                },function(reason){
                    console.log(reason);
                    $scope.loadingComment = "";
                }
            );
        }

        /** Return to conference list **/
        $scope.back =function(){
            console.log("back function");
            $ionicNavBarDelegate.back();
        }

        /** Add a conference in agenda **/
        $scope.addAgenda = function(id){

            if(localStorage.getItem("myAgenda") == null)
                AgendaService.addToAgenda(id);
            else{
                if(AgendaService.checkSameScheduleConferenceInAgenda(id,conferences) == false)
                    AgendaService.addToAgenda(id);
                else{
                    $ionicPopup.alert({
                        title: 'Impossible',
                        content: 'One conference already to add with the same to start'
                    });
                }
            }
        }
    }]);