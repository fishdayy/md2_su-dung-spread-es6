function main() {
    let message;
    let total = 100;
    let isProduction = true;
    let prices = [120, 88, 60];
    let languages = ['vi', 'en-us'];
    let now = new Date();
    let unknown;
    let Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    function log(message) {
        console.log(message);
    }
    function getPost(postId) {
        isProduction = false;
        unknown = Direction.UP;
        unknown = 'changed';
        total = 50;
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        };
    }
}
main();
//# sourceMappingURL=fix.js.map