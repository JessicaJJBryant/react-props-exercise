// REACT PROPS EXERCISE
// 6c.
// Cannot figure 6c. out. I think it will involve the props in some way to pass the Bonus Function Component through Exercise Function Component, but I can't figure out how to do it. I'm sure it will make sense when gone over in class. I'm reading an article online from pretagteam.com that says you cannot pass state between sibling components, but a solution will be to wrap both siblings in a parent component and handle the state inside the parent component and then share between siblings, but I don't quite get this. May come back to it, but for now I am taking a break.

// 1a., 3b., and 3d.
function Exercise({good="Great", bad="Not Great"}){ 
    // 2a.
    return (
        <div>
            {/* 3c. */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
        </div>
    );
}

// 1b. 
export default Exercise;