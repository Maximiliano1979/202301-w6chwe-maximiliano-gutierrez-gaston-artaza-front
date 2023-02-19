import { useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../../store/features/robots/robotsSlice";

const useApi = () => {
  const dispatch = useAppDispatch();
  const loadRobots = useCallback(async () => {
    const result = await fetch("https://robots-4dix.onrender.com/robots");
    const robots = await result.json();
    dispatch(loadRobotsActionCreator(robots.robot));
  }, [dispatch]);

  const deleteRobot = useCallback(
    async (id: string) => {
      const result = await fetch(
        `https://robots-4dix.onrender.com/robots/${id}`,
        { method: "DELETE" }
      );

      if (!result.ok) {
        return;
      }

      dispatch(deleteRobotActionCreator(id));
    },
    [dispatch]
  );

  return { loadRobots, deleteRobot };
};

export default useApi;
