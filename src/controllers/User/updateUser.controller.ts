// src/controllers/updateUserController.ts
import { Request, Response } from "express";
import User from "../../models/user.model";

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, age, gender, email, password } = req.body;

  try {
    const [updated] = await User.update(
      { name, age, gender, email, password },
      { where: { id: userId } }
    );

    if (updated) {
      const updatedUser = await User.findByPk(userId);
      res
        .status(200)
        .json({ message: "Usuário atualizado com sucesso", data: updatedUser });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao atualizar o usuário:", error);
    res
      .status(500)
      .json({ error: "Erro ao atualizar usuário", details: error });
  }
};

// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';

// export const updateUser = async (req: Request, res: Response) => {
//   const userId = req.params.id;

//   const { name, email } = req.body;

//   if (!name || !email) {
//     return res.status(400).json({ error: 'Nome e email são obrigatórios' });
//   }

//   const { data, error } = await supabase
//     .from('users')
//     .update({ name, email })
//     .eq('id', userId);

//   if (error) {
//     return res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
//   }

//   return res.status(200).json({ message: 'Usuário atualizado com sucesso', data });
// };
