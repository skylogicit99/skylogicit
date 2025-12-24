"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
type Team = {
  isLeader: string;
  teamId: string;
  teamName: string;
};

const TeamNavigation = () => {
  const [team, setTeam] = useState<Team | null>(null);
  const [leader, setLeader] = useState(false);
  console.log({
    team,
    leader,
  });
  const checkLeader = async () => {
    const res = await fetch(`/api/poster/is-team-leader`);
    console.log(res);
    if (res.status === 200) {
      const data = await res.json();
      setTeam(data);
      if (data?.isLeader) {
        setLeader(true);
      }
    }
  };
  useEffect(() => {
    checkLeader();
  }, []);
  return (
    leader && (
      <Link href={`/poster/team/${team?.teamId}`}>
        <Button className="cursor-pointer">Team</Button>
      </Link>
    )
  );
};

export default TeamNavigation;
