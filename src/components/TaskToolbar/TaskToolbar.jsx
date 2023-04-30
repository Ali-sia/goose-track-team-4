import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';
import TaskModal from '../TaskModal/TaskModal';
import { deleteTask, editTask } from 'redux/tasks/tasks.operations';
import { toast } from 'react-hot-toast';

import {
  Toolbar,
  Button,
  ContextMenu,
  ContextMenuItem,
  MoveTaskIcon,
  EditTaskIcon,
  DeleteTaskIcon,
  MoveTaskIconBase,
} from './TaskToolbar.styled';

const TaskToolbar = ({ task, columns }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleMoveTask = (category, task) => {
    const newTask = { ...task, category: category };
    dispatch(editTask(newTask))
      .unwrap()
      .catch(e => {
        toast.error(`Unable to change category task`);
      });
    setShowMenu(!showMenu);
  };

  const handleEdit = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = id => {
    dispatch(deleteTask(id))
      .unwrap()
      .then(() => toast.success(`Task deleted!`))
      .catch(e => {
        toast.error(`Unable to change category task`);
      });
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  // const columns = ['To do', 'In progress', 'Done'];
  const otherColumns = columns.filter(column => column.title !== task.category);

  return (
    <Toolbar>
      <Button onClick={handleToggleMenu}>
        <MoveTaskIconBase theme={currentTheme} open={showMenu} />
      </Button>
      <ContextMenu
        ref={menuRef}
        open={showMenu}
        onClose={handleToggleMenu}
        theme={currentTheme}
      >
        {otherColumns.map(column => (
          <ContextMenuItem
            key={'menu' + column.title}
            onClick={() => handleMoveTask(column.title, task)}
          >
            {column.title}
            <MoveTaskIcon theme={currentTheme} />
          </ContextMenuItem>
        ))}
      </ContextMenu>
      <Button onClick={handleEdit}>
        <EditTaskIcon theme={currentTheme} />
      </Button>
      <Button onClick={() => handleDelete(task._id)}>
        <DeleteTaskIcon theme={currentTheme} />
      </Button>
      <TaskModal
        task={task}
        onClose={handleCloseModal}
        isModalOpen={openModal}
      />
    </Toolbar>
  );
};

export default TaskToolbar;
