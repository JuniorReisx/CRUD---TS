import { Request, Response } from "express";
import User from "../../models/user.model";

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const deletedRows = await User.destroy({
      where: { id: userId },
    });

    if (deletedRows > 0) {
      res
        .status(200)
        .json({ message: `Usuário com ID ${userId} deletado com sucesso.` });
    } else {
      res
        .status(404)
        .json({ message: `Usuário com ID ${userId} não encontrado.` });
    }
  } catch (error) {
    console.error("Erro ao deletar o usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário", details: error });
  }
};

// import { Request, Response } from 'express';
// import { supabase } from '../../database/db';

// export const deleteUser = async (req: Request, res: Response) => {
//   const userId = req.params.id;

//   if (!userId) {
//     return res.status(400).json({ error: 'ID do usuário é necessário' });
//   }

//   const { error } = await supabase
//     .from('users')
//     .delete()
//     .eq('id', userId);

//   if (error) {
//     return res.status(500).json({ error: 'Erro ao deletar usuário', details: error });
//   }

//   return res.status(200).json({ message: `Usuário com ID ${userId} deletado com sucesso` });
// };
