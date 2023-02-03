USE assignment;

CREATE TABLE article (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (255) NOT NULL,
    content VARCHAR (255) NOT NULL,
    authorID integer,
    FOREIGN KEY (authorID) REFERENCES user(id), 
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO article (title,content,authorID)
VALUES
("C++", "An octopus made by nailing extra legs onto a dog.",1),
("C programmers", "C programmers never die. They are just cast into void.",1),
("Question", "Q: How different are C and C++? A: 1. Because C — C++ = 1.",4),
("Knock knock", "Knock, knock … Who’s there? … *very long pause* … Java.",1),
("Two bytes meet", "The first byte asks, ‘Are you ill?’ The second byte replies, ‘No, just feeling a bit off.",2),
("UNIX is simple", "UNIX is simple. It just takes a genius to understand its simplicity.",2),
("Why programmers like UNIX", "Why programmers like UNIX: unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck, fsck, umount, sleep.",2),
("Two problems", "A system administrator has two problems: 1. Dumb users. 2. Smart users.",4),
("vi", "vi vi vi — the editor of the beast.",3),
(".NET", ".NET is called .NET so that it wouldn’t show up in a UNIX directory listing.",2),
("No computer","When we had no computers, we had no programming problems either.","5"),
("Easy way and a hard way","There is an easy way and a hard way. The hard part is finding the easy way.","6"),
("Ctrl-Z","There is no Ctrl-Z in life.","5"),
("Whitespace","Whitespace is never white.","5"),
("Fails","When all else fails … reboot.","6"),
("Bug","It’s not a bug — it’s an undocumented feature.","2"),
("A room","In a room full of top software designers, if two agree on the same thing, that’s a majority.","3"),
("Demonstrations","Demonstrations always crash.","3"),
("A program","A program is never less than 90% complete and never more than 95% complete.","1"),
("Walking on water","Walking on water and developing software from a specification are easy if both are frozen.","5"),
("GC","If Java had true garbage collection, most programs would delete themselves upon execution.","4"),
("SQL","A SQL query goes into a bar, walks up to two tables, and asks, ‘Can I join you?","3"),
("People in the world","There are 10 kinds of people in the world: Those who know binary and those who don’t.","6"),
("Two hard things","There are only two hard things in computer science: cache invalidation and naming things.","2"),
("Box","f the box says, ‘This software requires Windows XP or better,’ does that mean it’ll run on Linux?","4"),
("localhost","There’s no place like 127.0.0.1.","2"),
("I have not failed","I have not failed. I’ve just found 10,000 ways that won’t work.","5"),
("Glass","Q: Is the glass half-full or half-empty? A: The glass is twice as big as it needs to be.","3"),
("theory and practice","In theory, there ought to be no difference between theory and practice. In practice, there is.","1"),
("Programming is like sex","Programming is like sex: One mistake and you have to support it for the rest of your life.","6"),

