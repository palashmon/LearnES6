class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.barks = 0;
    }

    // Class properties transform - New proposal, not implemented yet as on 1st Oct, 2017
    // https://babeljs.io/docs/plugins/transform-class-properties/
    // barks = 0;

    /*
    Try it out: https://babeljs.io/repl-old/#?babili=false&evaluate=true&lineWrap=true&presets=es2015%2Creact%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&build=&circleciRepo=&code_lz=MYGwhgzhAEAiD2BzaBvAUNT1jwHYQBcAnAV2APiIApcwBbAUwBpoAjIhhgEwEpUMsgggAsAlhAB0tRtAC80aQwDcAwZhHiJ7TlzlsO3FYIC-A1mCIBrGPIAMRrOatU-6NVhz54IBhJBIqAAMAIQtLaFCrAEJoAFkATwV6BmhxaAASFA1JRWNAngd3bK0wm2hip2toAGpoAEZCtU8Ib19_RCoK0oLVaFNTZoJoCFxRYEsGIjLcBgB3OACAcgBlUfHJiEWWRYBpUVxkAGFhCx9NnsHhklxcRPkZ-YQOlevbrehFgHFvLgZcBfgXB8ix6QA&isEnvPresetTabExpanded=true&isPresetsTabExpanded=true&isSettingsTabExpanded=true&prettier=true&showSidebar=true&version=6.26.0
    */

    bark() {
        console.log(`Bark Bark! My name is ${this.name}`);
        this.barks = this.barks + 1;
        console.log(this.barks);
    }
    cuddle() {
        console.log(`I love you owner!`);
    }
    static info() {
        console.log('A dog is better than a cat by 10 times');
    }
    get description() {
        return `${this.name} is a ${this.breed} type of dog`;
    }
    set nicknames(value) {
        this.nick = value.trim();
    }
    get nicknames() {
        return this.nick.toUpperCase();
    }
}
const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');
