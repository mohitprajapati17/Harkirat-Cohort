// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.


class CallbackPool {

    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.running = 0;
    }

    run(task, onComplete) {
        const worker = () => {
            this.running++;
            task((err, res) => {
                onComplete(err, res);
                this.running--;
                this._next();
            })

        }
        if (this.running < this.limit) {
            worker();
        } else {
            this.queue.push(worker);
        }

    }

    _next() {
        if (this.queue.length > 0 && this.running < this.limit) {
            const nextWorker = this.queue.shift();
            nextWorker();
        }

    }
}

module.exports = CallbackPool;