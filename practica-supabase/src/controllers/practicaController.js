const supabase = require('../config/supabase');

const listar = async (req, res) => {
  const { data, error } = await supabase.from('practica').select('*');
  if (error) return res.status(500).json({ mensaje: error.message });
  res.json(data);
};

const obtener = async (req, res) => {
  const { data, error } = await supabase
    .from('practica').select('*')
    .eq('id', req.params.id).single();
  if (error) return res.status(404).json({ mensaje: 'No encontrado' });
  res.json(data);
};

const crear = async (req, res) => {
  const { nombre, numero_control } = req.body;
  const { data, error } = await supabase
    .from('practica')
    .insert([{ nombre, numero_control }])
    .select();
  if (error) return res.status(500).json({ mensaje: error.message });
  res.status(201).json(data);
};

const actualizar = async (req, res) => {
  const { data, error } = await supabase
    .from('practica').update(req.body)
    .eq('id', req.params.id).select();
  if (error) return res.status(500).json({ mensaje: error.message });
  res.json(data);
};

const eliminar = async (req, res) => {
  const { error } = await supabase
    .from('practica').delete()
    .eq('id', req.params.id);
  if (error) return res.status(500).json({ mensaje: error.message });
  res.json({ mensaje: 'Eliminado correctamente' });
};

module.exports = { listar, obtener, crear, actualizar, eliminar };