import { useCallback } from "react";
import { useAppDispatch } from "../../app/hooks";
import { loadRobotsActionCreator } from "../../store/features/robots/robotsSlice";

const useApi = () => {
  const dispatch = useAppDispatch();
  const loadRobots = useCallback(async () => {
    const result = await fetch("https://robots-4dix.onrender.com/robots");

    const robots = await result.json();
    dispatch(loadRobotsActionCreator(robots.robot));
  }, [dispatch]);
  return { loadRobots };
};

export default useApi;
