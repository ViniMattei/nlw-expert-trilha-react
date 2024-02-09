import * as DiaLog from '@radix-ui/react-dialog'
import {formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import  { X } from 'lucide-react'

interface NoteCardProps {
  note:  {
    id: string
    date: Date
    content: string
  }
  onNoteDeleted: (id: string) => void
}

export function NoteCard({note, onNoteDeleted}: NoteCardProps) {
  return (
  
    <DiaLog.Root>
      <DiaLog.Trigger className='rounded-md text-left flex-col bg-slate-800 p-5 gap-3 outline-none overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
        <span className='text-sm font-medium text-slate-300'>
        {formatDistanceToNow(note.date , {locale: ptBR , addSuffix: true})}
        </span>

        <p className='text-sm leading-6 text-slate-400'>
          {note.content}
        </p>
      
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/> 
      </DiaLog.Trigger>

      <DiaLog.Portal>
        <DiaLog.Overlay className='inset-0 fixed bg-black/50'/>
        <DiaLog.Content className='fixed inset-0 md:insut-auto overflow-hidden md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-slate-700 md:rounded-md flex flex-col md:max-w-[640px] w-full md:h-[60vh] outline-none '>
        <DiaLog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
          <X className='size-5'/>
        </DiaLog.Close>

        <div className='flex felx flex-1 flex-col gap-3 p-5'>
          <span className='text-sm font-medium text-slate-300'>
           {formatDistanceToNow(note.date , {locale: ptBR , addSuffix: true})}
          </span>

          <p className='text-sm leading-6 text-slate-400'>
            {note.content}
          </p>
        </div>

        <button 
        type='button' onClick={ () => onNoteDeleted(note.id)} className='w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group' >Deseja <span className='text-red-400 group-hover:underline'>apagar essa nota?</span>
        </button>
        
        </DiaLog.Content>
      </DiaLog.Portal>
    </DiaLog.Root>
  )
}