import React, { useState } from 'react';
import './PaletteCard.css';
import PropTypes from 'prop-types';
import { patchPalette } from '../../apiCalls';

const PaletteCard = ({updateProjects, projects, id, title, project_id, color_1_id, color_2_id, color_3_id, color_4_id, color_5_id}) => {

  let [editStatus, setEditStatus] = useState(false);
  let [currentPalette, setCurrentPalette] = useState({id, title, color_1_id, color_2_id, color_3_id, color_4_id, color_5_id, project_id});

  const changeColor = (event) => {
    let newPalette = {...currentPalette};
    let targetedValue = event.target.value;
    newPalette[targetedValue] = '#'+Math.floor(Math.random()*16777215).toString(16);

    setCurrentPalette(newPalette);
  }

  const updatePalette = async (palette) => {
    let newProjects = [...projects];
    await patchPalette(palette)
      .then(returnedPalette => {
        newProjects.find(project => returnedPalette.project_id === project.id)
          .palettes.map(paletteObject => {
            if (returnedPalette.title === paletteObject.title) {
              return returnedPalette
            }
          })
      });

      updateProjects(newProjects)
  }

  return (
    <section className='palette-card'>
      <section className='palette-container'>
        <div className='palette-slice' style={{backgroundColor: currentPalette.color_1_id}}>
          {editStatus &&
            <button className='change-color' value='color_1_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div className='palette-slice' style={{backgroundColor: currentPalette.color_2_id}}>
          {editStatus &&
            <button className='change-color' value='color_2_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div className='palette-slice' style={{backgroundColor: currentPalette.color_3_id}}>
          {editStatus &&
            <button className='change-color' value='color_3_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div className='palette-slice' style={{backgroundColor: currentPalette.color_4_id}}>
          {editStatus &&
            <button className='change-color' value='color_4_id' onClick={changeColor}>
              Change
            </button>
          }
        </div>
        <div className='palette-slice' style={{backgroundColor: currentPalette.color_5_id}}>
        {editStatus &&
          <button className='change-color' value='color_5_id' onClick={changeColor}>
            Change
          </button>
        }
        </div>
      </section>
      <section className='btn-container'>
        {!editStatus &&
          <button className='edit-palette' onClick={() => setEditStatus(!editStatus)}>Edit</button>
        }
        {editStatus &&
          <button className='save-palette' onClick={() => updatePalette(currentPalette)}>Save</button>
        }
        <button className='delete-palette'>Delete</button>
      </section>
    </section>
  )
}

export default PaletteCard;
