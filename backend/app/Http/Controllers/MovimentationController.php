<?php

namespace App\Http\Controllers;

use App\Http\Requests\MovimentationRequest;
use App\Models\Movimentation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MovimentationController extends Controller
{
    public function index()
    {
        try {
            return response()->json(['movimentations' => Movimentation::all()]);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Ops, ocorreu algum erro!']);
        }
    }

    public function store(MovimentationRequest $request)
    {
        try {
            DB::beginTransaction();
            Movimentation::create($request->all());
            DB::commit();

            return response()->json(['success' => 'Cadastrado com sucesso!']);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['error' => 'Ops, ocorreu algum erro!']);
        }
    }

    public function edit(Movimentation $movimentation)
    {
        return response()->json(['movimentation' => $movimentation]);
    }

    public function update(MovimentationRequest $request, Movimentation $movimentation)
    {
        try {
            DB::beginTransaction();
            $movimentation->update($request->all());
            DB::commit();

            return response()->json(['success' => 'Atualizado com sucesso!']);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['error' => 'Ops, ocorreu algum erro!']);
        }
    }

    public function destroy(Movimentation $movimentation)
    {
        $movimentation->delete();
        return response()->json(['success' => 'Excluido com sucesso!']);
    }
}
