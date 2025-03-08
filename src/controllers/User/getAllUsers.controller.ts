import { Request, Response } from "express";
import User from "../../models/user.model";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar os usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários", details: error });
  }
};

// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';

// export const getAllUsers = async (req: Request, res: Response) => {
//   const { data, error } = await supabase.from('users').select('*');

//   if (error) {
//     return res.status(500).json({ error: 'Erro ao buscar dados', details: error.message });
//   }

//   return res.status(200).json(data);
// };
