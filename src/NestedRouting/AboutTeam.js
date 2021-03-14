import React from 'react'

function AboutTeam() {
    return (
        <div>
            <h3 className="title">About our Team</h3>
        </div>
    )
}

export default AboutTeam

/*
     Using Regular expression  and Hooks

  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1];

  return (
    <>
      <h2>About</h2>
      {type === 'beluga' && <Beluga />}
      {type === 'blue' && <Blue />}
    </>
  );
 */
