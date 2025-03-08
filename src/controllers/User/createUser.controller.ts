import { Request, Response } from "express";
import User from "../../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  const { name, age, gender, email, password } = req.body;

  try {
    const newUser = await User.create({
      name,
      age,
      gender,
      email,
      password,
    });

    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", data: newUser });
  } catch (error) {
    console.error("Erro ao criar o usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário", details: error });
  }
};

// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';  // Importe o supabase de sua configuração
// import jwt from 'jsonwebtoken';

// export const createUser = async (req: Request, res: Response) => {

//   const { name, email, password, age, gender } = req.body;

//   try {
//     const { data: existingUser, error: userError } = await supabase
//       .from('users')
//       .select('*')
//       .eq('email', email)
//       .single();

//     if (userError) {
//       return res.status(500).json({ error: 'Erro ao verificar usuário', details: userError });
//     }

//     if (existingUser) {
//       return res.status(400).json({ error: 'Usuário já existe com esse email' });
//     }

//     const { data, error } = await supabase.from('users').insert([
//       { name, email, password, age, gender }
//     ]);

//     if (error) {
//       return res.status(500).json({ error: 'Erro ao criar usuário', details: error });
//     }

//     const token = jwt.sign({ userId: data[0].id }, process.env.JWT_SECRET as string, {
//       expiresIn: '1h',
//     });

//     return res.status(201).json({ message: 'Usuário criado com sucesso', data, token });
//   } catch (err) {
//     return res.status(500).json({ error: 'Erro inesperado', details: err });
//   }
// };
