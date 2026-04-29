import ServicioDetalleClient from '@/pages/ServicioDetalle'
import { getServiceBySlug } from '@/lib/supabase'

export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug)
  if (!service) {
    return {
      title: 'Servicio | Mi Servicio Técnico',
      description: 'Servicio técnico especializado en reparación de televisores en Getafe.',
    }
  }
  return {
    title: `${service.title} | Mi Servicio Técnico`,
    description: service.description || `${service.title} - Servicio técnico especializado en Getafe.`,
  }
}

export default function ServicioDetallePage() {
  return <ServicioDetalleClient />
}
