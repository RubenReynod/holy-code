<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;

class MailsController extends Controller
{
    public function sendMail(Request $request){
        $data = $request->all();
        Mail::send('emails.contact',(array)$data,function($m) use ($data){
            //$m->from('no-reply@bynet.com.mx',$name = 'BYNET | Contacto');
            //$m->to('contacto@bynet.com');
            $m->to($data['email']);
            //$m->subject('BYNET | CONTACTO');
        });
        return response()->json(['msg'=>'Mensaje enviado']);
    }
}
