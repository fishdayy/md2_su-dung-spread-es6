function main() {
    let message: string;
    let total: number = 100;
    let isProduction: boolean = true;
    let prices: Array<number> = [120, 88, 60];
    let languages: string[] = ['vi', 'en-us'];
    let now = new Date();
    let unknown: any;

    enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT
    }

    function log(message: string): void {
        console.log(message)
    }

    interface IPost {
        id: string;
        title: string;
        body?: string;
    }

    function getPost(postId: string): IPost {
        isProduction = false;
        unknown = Direction.UP;
        unknown = 'changed';
        total = 50;
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        } as IPost;
    }
}

main();