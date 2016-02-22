/// <reference path="../../definitions/angular.d.ts" />
/// <reference path="../../models/models.ts" />
/// <reference path="../../definitions/IControllerNavigation.ts" />
/// <reference path="../../definitions/ChildProfiles.d.ts" />

class ChildProfileListController implements IControllerNavigation {
    private _state;
    private _scope;
    private _childDataService: MCM.IChildDataService;
    private _navigationLinks: Array<NavigationLink>;

    constructor($scope, $state, childDataService: MCM.IChildDataService) {
        this._state = $state;
        this._scope = $scope;
        this._childDataService = childDataService;
        
        //TODO: need to remove and set dynamically somewhere
        this._scope.UseTestDataInitialization = true;

        if (this._scope.UseTestDataInitialization) {
            this._childDataService.add(
                {
                    id: 'record1',
                    givenName: 'John',
                    familyName: 'Oliver'
                });
            this._childDataService.add(
                {
                    id: 'record1',
                    givenName: 'Jane',
                    familyName: 'Oliver'
                });
            this._childDataService.add(
                {
                    id: 'record1',
                    givenName: 'Quinn',
                    familyName: 'Oliver'
                });
        }
        this._navigationLinks =
            [
            ];
    }

    public static $inject = ["$scope", "$state", 'ChildDataService']

    public GetChildList(): Child[] {
        return this._childDataService.getAll();
    }

    public NavigateToHomeScreen() {
        this.NavigateTo('landing');
    }

    public NavigateToPreviousView() {
        this.NavigateTo('landing');
    }

    public NavigationLinks() {
        return this._navigationLinks;
    }

    public NavigateTo(pStateName: string) {
        this._state.go(pStateName);
    }
}

angular.module('mcmapp').controller('childProfileListController', ChildProfileListController);