function skillsMember() {
    return {
        restrict: 'E',
        templateURL: 'module/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '*'
        }
    };
}
