"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var github_service_1 = require('./github.service');
var repos_service_1 = require('./repos.service');
var MyLanguageComponent = (function () {
    function MyLanguageComponent(_reposService, _router) {
        this._reposService = _reposService;
        this._router = _router;
    }
    MyLanguageComponent.prototype.ngOnInit = function () {
        this.repos = this._reposService.getRepos();
    };
    MyLanguageComponent.prototype.navigateToLanguage = function (selectedLanguage) {
        if (selectedLanguage.name) {
            this._router.navigate(['Language', { repoName: selectedLanguage.name }]);
        }
    };
    MyLanguageComponent = __decorate([
        core_1.Component({
            selector: 'my-language',
            templateUrl: 'app/my-language.component.html',
            directives: [],
            providers: [github_service_1.githubService, repos_service_1.ReposService],
            styleUrls: ['app/my-language.component.css']
        }), 
        __metadata('design:paramtypes', [repos_service_1.ReposService, router_deprecated_1.Router])
    ], MyLanguageComponent);
    return MyLanguageComponent;
}());
exports.MyLanguageComponent = MyLanguageComponent;
//# sourceMappingURL=my-language.component.js.map