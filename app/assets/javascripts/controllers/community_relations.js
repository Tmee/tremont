app.controller("CommunityRelationsController", ['$scope', function ($scope) {
  'use strict'

   var paragraph1 = "Tremont Realty Capital, LLC is deeply committed to corporate citizenship and community involvement. As part of this commitment, Tremont has been active in many local and national charities including our role as co-sponsor at the Real Estate Finance Association (REFA) Community Service Day, which supported the Boston-based Esplanade Association.";
   var paragraph2 = "Tremont has also been active in supporting Aggasiz Village, a summer residential camping program, as well as, the United Way charitable fundraising effort, which benefits numerous non-profit organizations and their good works.";
   var paragraph3 = "In addition, Tremont also supports the Make-A-Wish Foundation.";

   $scope.paragraph1 = paragraph1;
   $scope.paragraph2 = paragraph2;
   $scope.paragraph3 = paragraph3;
}]);