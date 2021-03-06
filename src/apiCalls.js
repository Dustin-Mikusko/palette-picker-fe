export const fetchAllProjects = () => {
  return fetch('https://palette-picker-1908.herokuapp.com/api/v1/projects')
    .then(res => {
      if (!res.ok) throw Error('Uh oh! Something went wrong.');
      return res.json();
    });
}

export const fetchSingleProject = (id) => {
  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/projects/${id}`)
    .then(res => {
      if (!res.ok) throw Error('No project found with that id.')
      return res.json();
    })
}

export const postNewProject = (project) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/projects`, options)
    .then(res => {
      if (!res.ok) throw Error('Error submitting project')
      return res.json();
    })
}

export const patchProject = (project) => {
  const { id } = project;
  const options = {
    method: "PATCH",
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/projects/${id}`, options)
    .then(res => {
      if (!res.ok) throw Error('Error updating project')
      return res.json()
    })
}

export const patchPalette = (palette) => {
  const { id } = palette;
  const options = {
    method: "PATCH",
    body: JSON.stringify(palette),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/palettes/${id}`, options)
    .then(res => {
      if (!res.ok) throw Error('Error updating palette.')
      return res.json()
    })
}

export const deletePalette = (id) => {
  const options = {
    method: "DELETE"
  };

  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/palettes/${id}`, options)
    .then(res => {
      if (!res.ok) throw Error('Could not find palette with that id')
      return 'Palette Deleted'
    })
}

export const fetchSinglePalette = (id) => {
  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/palettes/${id}`)
    .then(res => {
      if (!res.ok) throw Error('Could not find palette with that id.')
      return res.json();
    })
}

export const fetchAllPalettes = () => {
  return fetch('https://palette-picker-1908.herokuapp.com/api/v1/palettes')
    .then(res => {
      if (!res.ok) throw Error('Error getting palettes.')
      return res.json();
    })
}

export const postPalette = (palette) => {
  const options = {
    method: "POST",
    body: JSON.stringify(palette),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch('https://palette-picker-1908.herokuapp.com/api/v1/palettes', options)
    .then(res => {
      if (!res.ok) throw Error('Error submitting palette.')
      return res.json()
    })
}

export const deleteProject = (id) => {
  const options = {
    method: "DELETE"
  };

  return fetch(`https://palette-picker-1908.herokuapp.com/api/v1/projects/${id}`, options)
    .then(res => {
      if (!res.ok) throw Error('Could not find project with that id')
      return 'Project Deleted'
    })
}
