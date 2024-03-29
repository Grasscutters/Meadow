import React from "react";

class Loader extends React.Component {
    private loadingText: string[] = [
        "Insert funny loading text here...",
        "Generating witty text...",
        "Looking for who asked...",
        "Please don't crash... - @Benj",
        "Fixign misreabel typos",
        "Playing Rickroll.mp4",
        "Never gonna give you up, Never gonna let you down",
        "Playing Elevator_Music.mp4",
        "...and enjoy the elevator music...",
        "TODO: Insert elevator music",
        "Warping space-time",
        "(Pay no attention to the man behind the curtain)",
        "The server is powered by a lemon and two electrodes.",
        "We're testing your patience",
        "The bits are flowing slowly today",
        "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
        "My other loading screen is much faster.",
        "Are we there yet?",
        "Counting backwards from Infinity",
        "Warning: Don't set yourself on fire.",
        "I'm sorry Dave, I can't do that.",
        "All your web browser are belong to us",
        "I feel like I'm supposed to be loading something. . .",
        "Please wait while the minions do their work",
        "Waking up the minions",
        "Grabbing extra minions",
        "We're working very Hard .... Really",
        "You are number 2843684716 in the queue",
        "Get some coffee and come back in ten minutes..",
        "How did you get here?",
        "Wait, do you smell something burning?",
        "Computing the secret to life, the universe, and everything.",
        "Why are they called apartments if they are all stuck together?",
        "Whenever I find the key to success, someone changes the lock.",
        "Adults are just kids with money.",
        "Constructing additional pylons...",
        "Locating Jebediah Kerman...",
        "We are not liable for any broken screens as a result of waiting.",
        "If I'm not back in five minutes, just wait longer.",
        "Sending data to the FB-i mean, our servers.",
        "Looking for sense of humour, please hold on.",
        "A different error message? Finally, some progress!",
        "Distracted by cat gifs",
        "Finding someone to hold my beer",
        "BRB, working on my side project",
        "Let's hope it's worth the wait",
        "Whatever you do, don't look behind you...",
        "Feel free to spin in your chair",
        "Bored of slow loading spinner, buy more RAM!",
        "Downloading more RAM...",
        "Optimizing the optimizer...",
        "Never let a computer know you're in a hurry.",
        'Deleting your "homework" folder...',
        "Discovering new ways of making you wait...",
        "Your time is very important to us. Please wait while we ignore you...",
        "Sorry we are busy catching em' all, we'll be done soon",
        "Still faster than Windows update",
        "Updating the Windows operating system",
        "When nothing is going right, go left",
        "YAHAHA YOU FOUND ME",
        "I'm not a robot. I'm a human being.",
        "Listening to Two Trucks...",
        "Listening to the sound of your voice...",
        "Watching grass grow...",
        "Reordering protocol buffers",
        "Stealing tokens (totally not yours btw)",
        "Searching for the wiki password...",
        "Hold on while I'll complain in general",
        "Wait for my timeout to finish because I said a forbidden word...",
        "Lurking for the devkit",
        "Gib beta",
        "Deploying Windseed",
        "Requesting Luas from Upstream",
        "Windying the competition"
    ];

    private getRandomLoadingText(): string {
        return this.loadingText[
            Math.floor(Math.random() * this.loadingText.length)
        ];
    }

    render() {
        return (
            <div className={"Loader"}>
                <div className={"Loader_Spinner"} />
                <p>{this.getRandomLoadingText()}</p>
            </div>
        );
    }
}

export default Loader;
